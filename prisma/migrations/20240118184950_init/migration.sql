/*
  Warnings:

  - Added the required column `quizId` to the `Result` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Result" ADD COLUMN     "quizId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UserQuiz" ADD COLUMN     "resultId" TEXT;

-- AddForeignKey
ALTER TABLE "Result" ADD CONSTRAINT "Result_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "Quiz"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
