### Intro

I used this template in the very beginning of my programming path. It was used with github submodule to serve my frontend projects. Heroku was the place for my deployments.

## Quickstart

If you want to use it, first clone the repo. Then add git submodule with your FE project, follow this instruction if are not sure how - https://git-scm.com/book/en/v2/Git-Tools-Submodules. Then you need envs:
- FRONT_NAME - your FE submodule name , it is going to be served by Express(there need to be a build folder prepared already with all the static assets)

For sending emails you need (from your email delivery provider):
- MAIL_HOST - email host
- MAIL_PORT - port to use for sending
- MAIL_USER - your email sender provider login
- MAIL_PASS -your email sender provider password

Now it is time for deployment. I usually used Heroku for it, please see their docs for details: https://devcenter.heroku.com/articles/git . The instructions there are spot on, remember to add your ENVs in Heroku (through the website interface once you are log in)

## Additional tips

I recommend using [create-react-app](https://github.com/facebook/create-react-app) to prepare the build folder. With CRA all you need to do is `npm run build` after your done developing and then add it here as a submodule.