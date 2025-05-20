// model NotificationEngagement {
//   id Int @id @default(autoincrement())
//   beneficiaryId Int
//   NotificationType NotificationType
//   createdAt DateTime @default(now())
//   updatedAt DateTime @updatedAt
// }

// enum NotificationType {
//   Enviado
//   Recebido
// }

// model Food {
//   id          Int     @id @default(autoincrement())
//   nome        String
//   validade    DateTime
//   quantidade  Int
//   categoria   String
//   descricao   String
//   doadorId  Donors @relation(fields: [donorId], references: [id])
//   createdAt   DateTime @default(now())
//   updatedAt   DateTime @updatedAt
// }

// model ImpactReport {
//   id          Int      @id @default(autoincrement())
//   title       String
//   description String
//   savedFoodKg Float
//   createdAt   DateTime @default(now())
//   updatedAt   DateTime @updatedAt
//   doadorId Int
// }








// model CollectionPoints {
//   id          Int     @id @default(autoincrement())
//   beneficiaryId Int
//   beneficiary      Beneficiary @relation(fields: [beneficiaryId], references: [id])
//   nome        String
//   endereco    String
//   telefone    String
//   horario_de_funcionamento DateTime
//   createdAt   DateTime @default(now())
//   updatedAt   DateTime @updatedAt
// }
