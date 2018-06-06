# README

## Khem Labs Official Website built with love

### DEV

#### NPM Commands

To run this commands you need to have docker and docker-compose

##### BUILD IMAGE, CONTAINER AND RUN

```
# Run
yarn build
# Or
npm run build
```

##### RECREATE CONTAINER AND RUN

```
# Run
yarn recreate
# Or
npm run recreate
```

##### START EXISITNG CONTAINER

```
# Run
yarn start
# Or
npm run start
```

##### STOP EXISTING CONTAINER

```
# Run
yarn stop
# Or
npm run stop
```

### Configurate project

Add gmail credentials or set boolean to disable gmail at:

- DEV: **./config/env/dev.env**
- PROD: **./config/env/prod.env**
  _prod.env must exist to build project in prod_

```
GMAIL_USER=user
GMAIL_PASSWORD=password
EMAIL_TO=list
```

**OR**

```
DISABLE_EMAIL=true
```

### Environment Variables

#### DISABLE_EMAIL

- Type: Boolean
- Required: optional
- Default: false

#### EMAIL_TO

- Type: string
- Required: When DISABLE_EMAIL is false
- Example: "emailone@gmail.com, email2@gmail.com, email3@gmail.com"

#### GMAIL_USER

- Type: email
- Required: When DISABLE_EMAIL is false

#### GMAIL_PASSWORD

- Type: string
- Required: When DISABLE_EMAIL is false

### Who do I talk to?

- dnangelus
- elgambet
- ajchambeaud
