/*
  Warnings:

  - You are about to drop the `CampaingsAwareness` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "CampaingsAwareness";

-- CreateTable
CREATE TABLE "CollectionPoints" (
    "id" SERIAL NOT NULL,
    "beneficiaryId" INTEGER NOT NULL,
    "impactReportId" INTEGER NOT NULL,
    "campaigsAwarenessId" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "horario_de_funcionamento" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CollectionPoints_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CampaigsAwareness" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "data_inicio" TIMESTAMP(3) NOT NULL,
    "data_fim" TIMESTAMP(3) NOT NULL,
    "localizacao" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CampaigsAwareness_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CollectionPoints" ADD CONSTRAINT "CollectionPoints_beneficiaryId_fkey" FOREIGN KEY ("beneficiaryId") REFERENCES "Beneficiary"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollectionPoints" ADD CONSTRAINT "CollectionPoints_impactReportId_fkey" FOREIGN KEY ("impactReportId") REFERENCES "ReportsCampaign"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CollectionPoints" ADD CONSTRAINT "CollectionPoints_campaigsAwarenessId_fkey" FOREIGN KEY ("campaigsAwarenessId") REFERENCES "CampaigsAwareness"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
