/*
  Warnings:

  - You are about to drop the column `resultId` on the `UserQuiz` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Result` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserQuiz" DROP CONSTRAINT "UserQuiz_resultId_fkey";

-- AlterTable
ALTER TABLE "Result" ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UserQuiz" DROP COLUMN "resultId";

-- AddForeignKey
ALTER TABLE "Result" ADD CONSTRAINT "Result_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
