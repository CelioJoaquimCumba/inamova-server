/*
  Warnings:

  - You are about to drop the column `passingScore` on the `Quiz` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Quiz" DROP COLUMN "passingScore",
ADD COLUMN     "passingPercentage" DECIMAL(65,30) DEFAULT 72;
