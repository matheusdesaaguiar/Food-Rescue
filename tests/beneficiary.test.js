// tests/beneficiary.test.js
import { createBeneficiary } from '../src/controller/beneficiaryController';

describe('createBeneficiary', () => {
  it('deve criar um beneficiário com sucesso', async () => {
    const req = {
      body: {
        name: 'Pedro Afonso',
        email: 'pedro@example.com',
        registrationNumber: '123456'
      }
    };

    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await createBeneficiary(req, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      message: 'Beneficiário criado com sucesso!',
      beneficiary: expect.objectContaining({
        name: 'Pedro Afonso',
        email: 'pedro@example.com',
        registrationNumber: '123456'
      })
    }));
  });

  it('deve retornar erro se campos obrigatórios estiverem faltando', async () => {
    const req = { body: {} };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    await createBeneficiary(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({
      message: 'Nome, email e número de registro são obrigatórios.'
    });
  });
});
