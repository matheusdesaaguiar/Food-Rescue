/*
  Warnings:

  - You are about to drop the column `endereco` on the `Beneficiary` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Beneficiary` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `Beneficiary` table. All the data in the column will be lost.
  - You are about to drop the column `data_fim` on the `CampaigsAwareness` table. All the data in the column will be lost.
  - You are about to drop the column `data_inicio` on the `CampaigsAwareness` table. All the data in the column will be lost.
  - You are about to drop the column `descricao` on the `CampaigsAwareness` table. All the data in the column will be lost.
  - You are about to drop the column `localizacao` on the `CampaigsAwareness` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `CampaigsAwareness` table. All the data in the column will be lost.
  - You are about to drop the column `endereco` on the `CollectionPoints` table. All the data in the column will be lost.
  - You are about to drop the column `horario_de_funcionamento` on the `CollectionPoints` table. All the data in the column will be lost.
  - You are about to drop the column `impactReportId` on the `CollectionPoints` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `CollectionPoints` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `CollectionPoints` table. All the data in the column will be lost.
  - You are about to drop the column `endereco` on the `Donor` table. All the data in the column will be lost.
  - You are about to drop the column `nome` on the `Donor` table. All the data in the column will be lost.
  - You are about to drop the column `telefone` on the `Donor` table. All the data in the column will be lost.
  - You are about to drop the `ReportsCampaign` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `address` to the `Beneficiary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Beneficiary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Beneficiary` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `CampaigsAwareness` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endDate` to the `CampaigsAwareness` table without a default value. This is not possible if the table is not empty.
  - Added the required column `loction` to the `CampaigsAwareness` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `CampaigsAwareness` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `CampaigsAwareness` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `CollectionPoints` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hoursOfOperetion` to the `CollectionPoints` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `CollectionPoints` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `CollectionPoints` table without a default value. This is not possible if the table is not empty.
  - Added the required column `address` to the `Donor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Donor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `Donor` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('sent', 'received');

-- DropForeignKey
ALTER TABLE "CollectionPoints" DROP CONSTRAINT "CollectionPoints_impactReportId_fkey";

-- AlterTable
ALTER TABLE "Beneficiary" DROP COLUMN "endereco",
DROP COLUMN "nome",
DROP COLUMN "telefone",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CampaigsAwareness" DROP COLUMN "data_fim",
DROP COLUMN "data_inicio",
DROP COLUMN "descricao",
DROP COLUMN "localizacao",
DROP COLUMN "nome",
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "endDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "loction" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "CollectionPoints" DROP COLUMN "endereco",
DROP COLUMN "horario_de_funcionamento",
DROP COLUMN "impactReportId",
DROP COLUMN "nome",
DROP COLUMN "telefone",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "hoursOfOperetion" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Donor" DROP COLUMN "endereco",
DROP COLUMN "nome",
DROP COLUMN "telefone",
ADD COLUMN     "address" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT NOT NULL;

-- DropTable
DROP TABLE "ReportsCampaign";

-- CreateTable
CREATE TABLE "NotificationEngagement" (
    "id" SERIAL NOT NULL,
    "foodId" INTEGER NOT NULL,
    "beneficiaryId" INTEGER NOT NULL,
    "NotificationType" "NotificationType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NotificationEngagement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Food" (
    "id" SERIAL NOT NULL,
    "donorId" INTEGER NOT NULL,
    "collectionPointsId" INTEGER NOT NULL,
    "AwarenessId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "validity" TIMESTAMP(3) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Food_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ImpactReport" (
    "id" SERIAL NOT NULL,
    "donorId" INTEGER NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "savedFoodKg" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ImpactReport_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "NotificationEngagement" ADD CONSTRAINT "NotificationEngagement_foodId_fkey" FOREIGN KEY ("foodId") REFERENCES "Food"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NotificationEngagement" ADD CONSTRAINT "NotificationEngagement_beneficiaryId_fkey" FOREIGN KEY ("beneficiaryId") REFERENCES "Beneficiary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Food" ADD CONSTRAINT "Food_donorId_fkey" FOREIGN KEY ("donorId") REFERENCES "Donor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Food" ADD CONSTRAINT "Food_collectionPointsId_fkey" FOREIGN KEY ("collectionPointsId") REFERENCES "CollectionPoints"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Food" ADD CONSTRAINT "Food_AwarenessId_fkey" FOREIGN KEY ("AwarenessId") REFERENCES "CampaigsAwareness"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ImpactReport" ADD CONSTRAINT "ImpactReport_donorId_fkey" FOREIGN KEY ("donorId") REFERENCES "Donor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
