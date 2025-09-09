from sqlalchemy.orm import registry, Mapped, mapped_column
from sqlalchemy.dialects.postgresql import UUID
import uuid
from sqlalchemy import String


mapper_registry = registry()

@mapper_registry.mapped_as_dataclass
class Client:
    __tablename__ = "clients"

    name: Mapped[str] = mapped_column(String(200), nullable = False)
    cpf: Mapped[str] = mapped_column(String(11),unique=True, nullable = False)
    password: Mapped[str] = mapped_column(String(50), nullable = False)

    id: Mapped[uuid.UUID] = mapped_column(UUID(as_uuid=True), primary_key=True, default_factory=uuid.uuid4)
    