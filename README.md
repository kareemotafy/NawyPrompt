docker run -d \
 --name postgres-dev \
 -e POSTGRES_USER=devuser \
 -e POSTGRES_PASSWORD=devpass \
 -e POSTGRES_DB=devdb \
 -p 5432:5432 \
 postgres:15
