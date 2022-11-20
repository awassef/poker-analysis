from fastapi import FastAPI, Query
from fastapi import File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Union
import itertools

from fastapi_cache import FastAPICache
from fastapi_cache.backends.redis import RedisBackend
from fastapi_cache.decorator import cache
from fastapi_cache.coder import PickleCoder, JsonCoder, Coder
from redis import asyncio as aioredis

import motor.motor_asyncio

db_client = motor.motor_asyncio.AsyncIOMotorClient('localhost', 27017)
collection = db_client.test_db



app = FastAPI()
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

async def insert_test_stuff():
    result = await collection.insert_one({'test_key': 'test_value'})
    print('result %s' % repr(result.inserted_id))


@app.get("/")
async def read_root():
    return {"Hello": "World"}

@app.post("/upload/hands/")
async def create_upload_file(hand_file: UploadFile):
    result = await insert_test_stuff    
    return {"filename": hand_file.filename}