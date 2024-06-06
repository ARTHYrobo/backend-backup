import supertest from 'supertest';
import { acessoApenasPara } from '../../src/services/auth/jwt-strategy.js';
import jwt from 'jsonwebtoken';
import { jwtSign } from '../../src/services/auth/oAuth.js';
import app from '../../src/app.js';

const resMock = (req, res) => res.json(req.user);
app.get('/teste/totem', acessoApenasPara('TOTEM'), resMock);
app.get('/teste/user', acessoApenasPara('USER'), resMock);
app.get('/teste/user&adm', acessoApenasPara('USER', 'ADM'), resMock);

const request = supertest(app);

const tokenData = {
  id: 1,
  roles: 'USER',
};

async function reqTest(rota, token, notSign) {
  if (!notSign) token = jwtSign(token);
  const res = await request
    .get('/teste/' + rota)
    .set('Authorization', `Bearer ${token}`);

  return res;
}

describe('jwt-strategy', () => {
  it('céu azul | token certo e rota permitida para USER', async () => {
    const response = await reqTest('user', tokenData);

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id');
  }); 

  it('céu azul | token certo e rota permitida para USER e ADM', async () => {
    const responseUser = await reqTest('user&adm', tokenData);
    const responseADM = await reqTest('user&adm', { id: 123, roles: 'ADM' });

    expect(responseADM.status).toBe(200);
    expect(responseADM.body).toHaveProperty('id');
    expect(responseUser.statusCode).toBe(200);
    expect(responseUser.body).toHaveProperty('id');
  });

  it('céu azul | token certo e rota permitida para TOTEM', async () => {
    const response = await reqTest('totem', { id: 123, roles: 'TOTEM' });

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id');
  });

  it('céu triste | token invalido', async () => {
    const tokenSuspeito = jwt.sign(tokenData, 'secket confiavel');

    const response = await reqTest('user', tokenSuspeito, true);

    expect(response.statusCode).toBe(401);
    // teria mensagem tbm se o passport n fosse tao paioso e maldito
    // custava ter uma opcao de msg personalizada em json? :(
  });

  it('céu triste | nao autorizado', async () => {
    const response = await reqTest('user', { id: 123, roles: 'TOTEM' });

    expect(response.statusCode).toBe(403);
    expect(response.body).toHaveProperty('message');
  });
});
