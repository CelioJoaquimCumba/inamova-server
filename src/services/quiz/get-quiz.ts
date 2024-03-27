import { PrismaClient } from "@prisma/client";
import { Question } from "../../models/question.model.js";
import { BadRequestError } from "../../errors/BadRequest.js";
import { shuffleArray } from "../../utils/shuffle-array.js";

const prisma = new PrismaClient();

export const getQuizService = async (id: string): Promise<Array<Question>> => {
  try {
    // Count the total number of questions for the specific quiz
    const totalQuestions = await prisma.quizQuestion.count({
      where: { quizId: id },
    });

    // Check if there are even any questions for the quiz
    if (totalQuestions === 0) {
      throw BadRequestError("Quiz does not have any questions");
    }

    let skip = 0;

    // If there are more than 25 questions, calculate a random skip value
    if (totalQuestions > 25) {
      skip = Math.floor(Math.random() * (totalQuestions - 24));
    }

    const questionsWithOptions = await prisma.quizQuestion.findMany({
      where: { quizId: id },
      take: 25,
      include: {
        question: {
          include: {
            options: true,
          },
        },
      },
      skip,
    });

    if (!questionsWithOptions) {
      throw BadRequestError("Teste não encontrado");
    }

    // Extract only the 'question' property and shuffle options
    const questions: Question[] = questionsWithOptions.map((quizQuestion) => {
      const question = quizQuestion.question;
      question.options = shuffleArray(question.options);
      return question;
    });
    console.log(questions.length)

    return questions;
  } catch (error) {
    throw error; // Re-throw the error for proper handling
  } finally {
    await prisma.$disconnect();
  }
};
