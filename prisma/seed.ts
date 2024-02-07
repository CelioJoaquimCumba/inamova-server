// seeds.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
	// Create a quiz object
	const drivingRulesQuiz = {
		title: "Driving Rules Quiz",
		description: "Test your knowledge of driving rules and regulations.",
		thumbnail: "path/to/driving_thumbnail.jpg",
		passingPercentage: 72,
	};

	// // Create a quiz
	const quiz = await prisma.quiz.create({
		data: drivingRulesQuiz,
	});

	// // Create an array of question objects with options
	const questionData = [
		{
			content: "When should you use your turn signals?",
			explanation:
				"Turn signals should be used to indicate your intentions to other road users.",
			options: [
				{ content: "Only when turning", isCorrect: true },
				{ content: "When changing lanes", isCorrect: true },
				{
					content: "When pulling over to the side of the road",
					isCorrect: true,
				},
				{ content: "All of the above", isCorrect: true },
			],
		},
		{
			content: "When should you use your turn signals?",
			explanation:
				"Turn signals should be used to indicate your intentions to other road users.",
			options: [
				{ content: "Only when turning", isCorrect: true },
				{ content: "When changing lanes", isCorrect: true },
				{
					content: "When pulling over to the left side of the road",
					isCorrect: true,
				},
				{ content: "All of the above", isCorrect: true },
			],
		},
		// Question 2
		{
			content: "What is the maximum speed limit in residential areas?",
			explanation:
				"Respect posted speed limits in residential areas to ensure the safety of pedestrians and residents.",
			options: [
				{ content: "25 km/h", isCorrect: true },
				{ content: "30 km/h", isCorrect: false },
				{ content: "35 km/h", isCorrect: false },
				{ content: "40 km/h", isCorrect: false },
			],
		},
		// Question 3
		{
			content: "What side of the road should you drive on in your area?",
			explanation:
				"Driving on the left side of the road is common in some regions.",
			options: [
				{ content: "Right side", isCorrect: false },
				{ content: "Left side", isCorrect: true },
				{ content: "It doesn't matter", isCorrect: false },
				{ content: "Depends on the time of day", isCorrect: false },
			],
		},
		// Question 4
		{
			content: "In a roundabout, who has the right of way?",
			explanation:
				"Drivers already in the roundabout have the right of way over entering traffic.",
			options: [
				{ content: "Vehicles entering the roundabout", isCorrect: false },
				{ content: "Vehicles already in the roundabout", isCorrect: true },
				{ content: "Pedestrians crossing the roundabout", isCorrect: false },
				{ content: "Cyclists in the roundabout", isCorrect: false },
			],
		},
		// Question 5
		{
			content:
				"What is the minimum safe following distance in ideal driving conditions?",
			explanation:
				"Maintaining a safe following distance helps prevent collisions.",
			options: [
				{ content: "1 second", isCorrect: false },
				{ content: "2 seconds", isCorrect: true },
				{ content: "3 seconds", isCorrect: false },
				{ content: "4 seconds", isCorrect: false },
			],
		},
		// Question 6
		{
			content: "In your area, what does a yellow traffic light indicate?",
			explanation:
				"Yellow lights warn that the signal is about to change to red. Prepare to stop if safe to do so.",
			options: [
				{ content: "Stop", isCorrect: false },
				{ content: "Speed up", isCorrect: false },
				{ content: "Proceed with caution", isCorrect: true },
				{ content: "Turn left", isCorrect: false },
			],
		},
		// Question 7
		{
			content:
				"What does a triangular road sign with an exclamation mark mean?",
			explanation:
				"This sign warns of potential hazards or unexpected conditions ahead.",
			options: [
				{ content: "No entry", isCorrect: false },
				{ content: "School zone ahead", isCorrect: false },
				{ content: "Warning of hazards ahead", isCorrect: true },
				{ content: "Yield", isCorrect: false },
			],
		},
		// Question 8
		{
			content: "When can you overtake another vehicle on a two-lane road?",
			explanation:
				"Overtaking is generally allowed when the road ahead is clear and it is safe to do so.",
			options: [
				{ content: "Only on the right side", isCorrect: false },
				{ content: "Only on the left side", isCorrect: true },
				{ content: "Only during daylight hours", isCorrect: false },
				{ content: "Only on weekends", isCorrect: false },
			],
		},
		// Question 9
		{
			content: "What should you do if you miss your exit on a highway?",
			explanation:
				"Continue to the next exit and re-route. Do not reverse on a highway.",
			options: [
				{ content: "Back up to the exit", isCorrect: false },
				{ content: "Make a U-turn if possible", isCorrect: false },
				{ content: "Continue to the next exit", isCorrect: true },
				{ content: "Stop and wait for assistance", isCorrect: false },
			],
		},
		// Question 10
		{
			content:
				"What is the legal blood alcohol concentration (BAC) limit for drivers?",
			explanation:
				"Driving under the influence of alcohol is dangerous and against the law.",
			options: [
				{ content: "0.05%", isCorrect: false },
				{ content: "0.08%", isCorrect: true },
				{ content: "0.10%", isCorrect: false },
				{ content: "0.15%", isCorrect: false },
			],
		},
		// Question 11
		{
			content: "In your area, what is the maximum speed limit on a highway?",
			explanation:
				"Follow posted speed limits on highways to ensure safety and compliance with regulations.",
			options: [
				{ content: "80 km/h", isCorrect: false },
				{ content: "100 km/h", isCorrect: true },
				{ content: "120 km/h", isCorrect: false },
				{ content: "150 km/h", isCorrect: false },
			],
		},
		// Question 12
		{
			content: 'What does a red octagonal sign with white letters "STOP" mean?',
			explanation:
				"Come to a complete stop at a stop sign. Proceed only when it is safe to do so.",
			options: [
				{ content: "Yield", isCorrect: false },
				{ content: "Proceed with caution", isCorrect: false },
				{ content: "Stop", isCorrect: true },
				{ content: "Merge", isCorrect: false },
			],
		},
		// Question 13
		{
			content:
				"What should you do when approaching a school bus with flashing red lights?",
			explanation:
				"Stop until the red lights stop flashing to ensure the safety of children boarding or exiting the bus.",
			options: [
				{ content: "Proceed with caution", isCorrect: false },
				{
					content: "Pass the bus if children are not yet crossing",
					isCorrect: false,
				},
				{ content: "Stop until the red lights stop flashing", isCorrect: true },
				{ content: "Honk your horn to alert the driver", isCorrect: false },
			],
		},
		// Question 14
		{
			content: "When can you use your horn?",
			explanation:
				"Use your horn to alert others to your presence or warn of potential danger.",
			options: [
				{ content: "Only in emergencies", isCorrect: true },
				{ content: "To express frustration or anger", isCorrect: false },
				{ content: "To say hello to a friend", isCorrect: false },
				{ content: "During rush hour traffic", isCorrect: false },
			],
		},
		// Question 15
		{
			content:
				"How much space should you leave between your vehicle and a bicyclist when passing?",
			explanation:
				"Leave at least 1 meter of space when passing a bicyclist to ensure their safety.",
			options: [
				{ content: "At least 1 foot", isCorrect: false },
				{ content: "At least 2 feet", isCorrect: false },
				{ content: "At least 3 feet", isCorrect: true },
				{ content: "Bicycles don't have the right of way", isCorrect: false },
			],
		},
		// Question 16
		{
			content: "What is the correct hand signal for indicating a right turn?",
			explanation:
				"Extend your left arm upward to indicate a right turn when hand signals are required.",
			options: [
				{ content: "Extend your left arm straight out", isCorrect: false },
				{ content: "Extend your right arm straight out", isCorrect: false },
				{ content: "Extend your left arm upward", isCorrect: true },
				{ content: "Extend your left arm downward", isCorrect: false },
			],
		},
		// Question 17
		{
			content:
				"What should you do if your vehicle starts to skid on a slippery road?",
			explanation:
				"Steer in the opposite direction of the skid to regain control of your vehicle.",
			options: [
				{ content: "Slam on the brakes", isCorrect: false },
				{
					content: "Steer in the opposite direction of the skid",
					isCorrect: true,
				},
				{ content: "Accelerate to regain control", isCorrect: false },
				{ content: "Turn off the engine", isCorrect: false },
			],
		},
		// Question 18
		{
			content:
				"What does a yellow diamond-shaped sign with two opposite-facing arrows mean?",
			explanation:
				"This sign warns of two-way traffic ahead. Stay in your lane and be cautious.",
			options: [
				{ content: "No passing zone", isCorrect: false },
				{ content: "Divided highway ahead", isCorrect: false },
				{ content: "Two-way traffic ahead", isCorrect: true },
				{ content: "Roundabout ahead", isCorrect: false },
			],
		},
		// Question 19
		{
			content:
				"In your area, what does a blue circular sign with a white arrow indicate?",
			explanation: "This sign provides directional information for motorists.",
			options: [
				{ content: "Parking area ahead", isCorrect: false },
				{ content: "One-way street", isCorrect: false },
				{
					content: "Mandatory direction of travel indicated by the arrow",
					isCorrect: true,
				},
				{ content: "Hospital ahead", isCorrect: false },
			],
		},
		// Question 20
		{
			content:
				"When is it appropriate to use high beams while driving at night?",
			explanation:
				"Use high beams when driving in rural or unlit areas, but dim them when approaching other vehicles.",
			options: [
				{ content: "In heavy traffic", isCorrect: false },
				{ content: "During rain or fog", isCorrect: false },
				{ content: "In well-lit urban areas", isCorrect: false },
				{ content: "In rural or unlit areas", isCorrect: true },
			],
		},
		// Question 21
		{
			content: "What is the meaning of a green traffic light?",
			explanation:
				"A green light indicates that you can proceed if the way is clear and safe.",
			options: [
				{ content: "Stop", isCorrect: false },
				{ content: "Proceed with caution", isCorrect: false },
				{ content: "Slow down", isCorrect: false },
				{ content: "Proceed if the way is clear and safe", isCorrect: true },
			],
		},
		// Question 22
		{
			content:
				'What does a white rectangular sign with black lettering "SCHOOL ZONE" mean?',
			explanation:
				"This sign warns of an upcoming school zone. Be prepared to slow down and watch for children.",
			options: [
				{ content: "No entry", isCorrect: false },
				{ content: "School zone ahead", isCorrect: true },
				{ content: "Yield", isCorrect: false },
				{ content: "Pedestrian crossing ahead", isCorrect: false },
			],
		},
		// Question 23
		{
			content: "How should you approach a yellow flashing traffic signal?",
			explanation:
				"A yellow flashing light indicates caution. Slow down and proceed with care.",
			options: [
				{ content: "Ignore and proceed", isCorrect: false },
				{ content: "Stop immediately", isCorrect: false },
				{ content: "Proceed with caution", isCorrect: true },
				{
					content: "Turn around and find an alternate route",
					isCorrect: false,
				},
			],
		},
		// Question 24
		{
			content: "What does a red equilateral triangle sign indicate?",
			explanation:
				"This sign warns of an upcoming yield. Be prepared to slow down and yield the right of way if necessary.",
			options: [
				{ content: "Stop", isCorrect: false },
				{ content: "Yield", isCorrect: true },
				{ content: "Caution: Slippery road ahead", isCorrect: false },
				{ content: "Merging traffic", isCorrect: false },
			],
		},
		// Question 25
		{
			content:
				"What should you do when approaching a railroad crossing with flashing lights and bells?",
			explanation:
				"Stop before the railroad crossing when lights are flashing, and bells are ringing. Wait for the train to pass.",
			options: [
				{ content: "Speed up and cross quickly", isCorrect: false },
				{ content: "Stop before the crossing", isCorrect: true },
				{ content: "Ignore the lights and bells", isCorrect: false },
				{ content: "Proceed if no train is visible", isCorrect: false },
			],
		},
		// Add more question objects with options...
	];

	await prisma.subject.create({
		data: {
			title: "Mathematics",
			thumbnail: "math_thumbnail_url",
			description: "Study of numbers and quantities.",
		},
	});

	await prisma.subject.create({
		data: {
			title: "Science",
			thumbnail: "science_thumbnail_url",
			description: "Study of the natural world.",
		},
	});

	await prisma.subject.create({
		data: {
			title: "History",
			thumbnail: "history_thumbnail_url",
			description: "Study of past events and civilizations.",
		},
	});

	await prisma.subject.create({
		data: {
			title: "English Literature",
			thumbnail: "literature_thumbnail_url",
			description: "Study of written works in the English language.",
		},
	});

	// Create questions and associate them with the quiz
	const createdQuestions = await Promise.all(
		questionData.map(async (qData) => {
			const question = await prisma.question.create({
				data: {
					content: qData.content,
					explanation: qData.explanation,
				},
			});

			// Create options for each question
			const createdOptions = await prisma.option.createMany({
				data: qData.options.map((option) => ({
					content: option.content,
					isCorrect: option.isCorrect,
					questionId: question.id,
				})),
			});

			// Associate the question with the quiz
			await prisma.quizQuestion.create({
				data: {
					quizId: quiz.id,
					questionId: question.id,
				},
			});

			return question;
		})
	);

	// // Seed data for Lesson model
	await prisma.lesson.create({
		data: {
			title: "Introduction to Algebra",
			thumbnail: "algebra_thumbnail_url",
			time: 2.5,
			subjectId: "91c29738-c1d7-469e-9ce5-6eb5ec80da9d",
		},
	});

	await prisma.lesson.create({
		data: {
			title: "Chemical Reactions",
			thumbnail: "chemistry_thumbnail_url",
			time: 3.0,
			subjectId: "e5ebe355-a5a6-4aec-ac4e-e88dfe520f4d",
		},
	});

	await prisma.lesson.create({
		data: {
			title: "Renaissance Art",
			thumbnail: "art_thumbnail_url",
			time: 2.0,
			subjectId: "d6cfaf70-a0ec-4183-b4c7-3f36d14b7424",
		},
	});

	await prisma.lesson.create({
		data: {
			title: "Shakespearean Sonnets",
			thumbnail: "sonnets_thumbnail_url",
			time: 1.5,
			subjectId: "2d1f5111-1180-4fd9-be4d-3dc972853a1c",
		},
	});

	// Seed data for Lesson model
	await prisma.lesson.create({
		data: {
			title: "Advanced Mathematics",
			thumbnail: "advanced_mathematics_thumbnail_url",
			time: 3.5,
			subjectId: "91c29738-c1d7-469e-9ce5-6eb5ec80da9d",
		},
	});

	await prisma.lesson.create({
		data: {
			title: "Inorganic Chemistry Basics",
			thumbnail: "inorganic_chemistry_thumbnail_url",
			time: 2.5,
			subjectId: "e5ebe355-a5a6-4aec-ac4e-e88dfe520f4d",
		},
	});

	await prisma.lesson.create({
		data: {
			title: "Impressionist Art Movement",
			thumbnail: "impressionist_art_thumbnail_url",
			time: 2.0,
			subjectId: "d6cfaf70-a0ec-4183-b4c7-3f36d14b7424",
		},
	});

	await prisma.lesson.create({
		data: {
			title: "Sonnet Writing Techniques",
			thumbnail: "sonnet_writing_thumbnail_url",
			time: 1.0,
			subjectId: "2d1f5111-1180-4fd9-be4d-3dc972853a1c",
		},
	});

	await prisma.lesson.create({
		data: {
			title: "Statistics and Probability",
			thumbnail: "statistics_probability_thumbnail_url",
			time: 4.0,
			subjectId: "91c29738-c1d7-469e-9ce5-6eb5ec80da9d",
		},
	});

	await prisma.lesson.create({
		data: {
			title: "Environmental Chemistry",
			thumbnail: "environmental_chemistry_thumbnail_url",
			time: 3.0,
			subjectId: "e5ebe355-a5a6-4aec-ac4e-e88dfe520f4d",
		},
	});

	await prisma.lesson.create({
		data: {
			title: "Modern Art Movements",
			thumbnail: "modern_art_thumbnail_url",
			time: 2.5,
			subjectId: "d6cfaf70-a0ec-4183-b4c7-3f36d14b7424",
		},
	});

	await prisma.lesson.create({
		data: {
			title: "Shakespearean Tragedies",
			thumbnail: "shakespearean_tragedies_thumbnail_url",
			time: 2.0,
			subjectId: "2d1f5111-1180-4fd9-be4d-3dc972853a1c",
		},
	});

	await prisma.lesson.create({
		data: {
			title: "Calculus Fundamentals",
			thumbnail: "calculus_fundamentals_thumbnail_url",
			time: 3.5,
			subjectId: "91c29738-c1d7-469e-9ce5-6eb5ec80da9d",
		},
	});

	await prisma.lesson.create({
		data: {
			title: "Analytical Chemistry Techniques",
			thumbnail: "analytical_chemistry_thumbnail_url",
			time: 2.0,
			subjectId: "e5ebe355-a5a6-4aec-ac4e-e88dfe520f4d",
		},
	});

	console.log("Seed data created successfully");
}

main()
	.catch((e) => {
		throw e;
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
