from pydantic import BaseModel

class ClientSchema(BaseModel):
    name: str
    cpf: str
    password: str
