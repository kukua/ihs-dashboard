# IHS Dashboard

## Environment

```bash
# > Edit ports etc. in docker-compose.yml

cp www/.env.example www/.env
chmod 600 www/.env
# > Edit www/.env
```

## Run server

```bash
docker-compose up -d

docker-compose run --rm --entrypoint=composer laravel install
docker-compose run --rm --entrypoint=php laravel artisan migrate
sudo chown -R $USER:$USER www/vendor/
```

## Check server

All three services should be UP:

```bash
docker-compose ps
```
