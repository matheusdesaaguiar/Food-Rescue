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

// model Alimento {
//   id          Int     @id @default(autoincrement())
//   nome        String
//   validade    DateTime
//   quantidade  Int
//   categoria   String
//   descricao   String
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