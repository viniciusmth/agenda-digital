from fastapi import FastAPI, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from fastapi.middleware.cors import CORSMiddleware
from app.database import get_db
from app.models import Client
from app.schemas import ClientSchema



app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["*"],
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers= ["*"]
)

@app.post("/")
async def create_user(user: ClientSchema, db: AsyncSession = Depends(get_db)):
    client = Client(
        name=user.name,
        cpf=user.cpf,
        password=user.password
    )
    db.add(client)
    await db.commit()
    await db.refresh(client)
    return {"user": client.__dict__}