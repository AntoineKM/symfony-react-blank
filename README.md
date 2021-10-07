# Symfony React Blank
Symfony React Blank is a blank symfony and react project, use this template to start your app using Symfony as an backend api and React as a frontend library.

## Installation
* [Install Composer](https://getcomposer.org/download).
* [Install Yarn](https://yarnpkg.com/) or [NodeJS](https://nodejs.org/).
* Click on "use this template" button on the top of this repository and run the following commands:

```
# Clone the project to download its contents
> cd projects/
> git clone <your repository link>.git
or
> git clone https://github.com/AntoineKM/symfony-react-blank.git

# Make Composer install the project's dependencies into vendor/
# Warning: This template requires php >=8.0.0
> cd <your project name>
or
> cd symfony-react-blank
> composer install

# Make Yarn install the project's dependencies into node_modules/
> yarn install

```

* Finally, setup your ``.env.local`` as the [.env](.env)

## Usage
```
# Startup the Symfony server
> symfony server:start

# Then startup the Symfony Encore server
> yarn dev-server
```

* Access the server at http://localhost:8000