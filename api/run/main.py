from fastapi import FastAPI
from pydantic import BaseModel
import contextlib
import io

app = FastAPI()


class CodePayload(BaseModel):
    code: str


@app.post("/run")
async def run_code(payload: CodePayload):
    buffer = io.StringIO()
    try:
        with contextlib.redirect_stdout(buffer):
            exec(payload.code, {})
        return {"output": buffer.getvalue()}
    except Exception as e:
        return {"error": str(e)}
