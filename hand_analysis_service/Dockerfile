FROM python:3.9

RUN apt-get update 

# set env variables
ENV PYTHONUNBUFFERED 1

# install dependencies
COPY requirements.txt .
RUN pip3 install -r requirements.txt
RUN echo 'hello'

WORKDIR /
COPY ./entrypoint.sh .
RUN chmod +x ./entrypoint.sh
ENTRYPOINT ls / && "/./entrypoint.sh"

EXPOSE 80
WORKDIR /app/code/