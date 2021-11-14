[![BCH compliance](https://bettercodehub.com/edge/badge/boobo94/house-protector?branch=master&token=df6b271c3e26d2862fe782d68be87f58747f8663)](https://bettercodehub.com/)

# About House Protector

House Protector is designed to protect your house when you're not there. It will simulate a real environment like you are living there using realistic sounds to defense against thieves or intruders. These sounds will create the idea that someone is inside the house and performing activities like talking, working, laughing, reading, cooking, cleaning. Your house becomes much safer with this skill.

HOW IT WORKS
When you start the skill, you'll be prompted with the available actions. You can start the protect mode by saying, for example, one of these:

`activate protect mode`
`activate guard mode`
`defense my home`
`defense my living room`
`defense my kitchen`
`defense my bedroom`

You can close the skill at any moment by saying `Alexa, stop!` or `Alexa, close!`.

PROFILE
House Protector has 4 profiles available: `default`, `living`, `bedroom` and `kitchen`. The profiles represent the room inside the house that you want to simulate. The collection of sounds is representative of each profile.

After you start the skill you'll be prompted with many options, at that stage you can obtain information about your current profile by asking:

`which is my profile`
`which is my active room`

After this information, you'll be asked which is your new profile option. But is not necessary to check your profile first. You can change your profile even after launch moment by asking something like:

`I want to change profile to {PROFILE_NAME}`
`I choose {PROFILE_NAME}`

DOG
House Protector has 4 dogs available: `german shepard`, `small`, `doberman` and `labrador`. The collection of sounds is representative for each dog.

After you open the skill you'll be prompted to this action too. You can obtain information about your current dog by asking:

`which is my dog`
`which is my active dog`

After this information, you'll be asked which is your new dog option. But is not necessary to check your dog first. You can change your dog even after launch moment by asking something like:

`I want to change dog to {DOG_NAME}`
`I choose {DOG_NAME}`

If you want to contact me to offer suggestions, hints or feedback you can do it through issues

This skill is published in [Amazon Store](https://www.amazon.com/dp/B081F5M6XT)

# AWS Lambda in TypeScript

## Install

1. Dependencies

  ```bash
  npm install
  ```

2. Download [ngrok](https://ngrok.com/) in the root folder

## Run project

1. Open a console

  ```bash
  npm run ngrok
  ```

  Copy the https link and go to [Alexa Console](https://developer.amazon.com/alexa/console/ask/test/amzn1.ask.skill.15bebd4e-4520-4a06-8fb7-57149258f4d0/development/en_US/), under Endpoint section, select `HTTPS` and paste the link in `Default Region` input field. From the below dropdown choose `My development endpoint is a sub-domain of a domain that has a wildcard certificate from a certificate authority`.
  Every time when you run the ngrok, you need to update the endpoint url. [[1]](https://medium.com/@cnadeau_/allow-alexa-to-run-your-locally-hosted-skill-1786e3ca7a1b)

2. Open another console
  ```bash
  npm start
  ```

## Deploy

Use npm to install ASK CLI. If you already have ASK CLI installed and want to update to the latest version, install it in the same way as a new user.

`$ npm install -g ask-cli`

After you install ask-cli, initialize ASK CLI:

`$ ask init`

You will be prompted to name your profile (default by default), choose the AWS profile to use, and to log in to your Amazon developer account. Once the initialization is complete, you can use ASK CLI to manage your skill.

If you choose to create a new one, first go in AWS IAM, create an user or choose an existing one and  create an access key.

Press `Add permission` button > `Attach existing policy` > `Create policy` > open JSON format and paste the following code

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "iam:CreateRole",
                "iam:GetRole",
                "iam:AttachRolePolicy",
                "iam:PassRole"
            ],
            "Resource": "arn:aws:iam::*:role/ask-*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "lambda:AddPermission",
                "lambda:CreateFunction",
                "lambda:GetFunction",
                "lambda:UpdateFunctionCode",
                "lambda:ListFunctions"
            ],
            "Resource": "arn:aws:lambda:*:*:function:ask-*"
        },
        {
            "Effect": "Allow",
            "Action": [
                "logs:FilterLogEvents",
                "logs:getLogEvents",
                "logs:describeLogStreams"
            ],
            "Resource": "arn:aws:logs:*:*:log-group:/aws/lambda/ask-*"
        }
    ]
}
```
Refference [here](https://developer.amazon.com/docs/smapi/set-up-credentials-for-an-amazon-web-services-account.html)

Last step, go to `./ask/config` and place you `skill_id` and your lambda arn.

In order to deploy run:

`$ ask deploy`

## Developer tasks

Frequently used `npm script`s:

| Script name   | Description                                                                                                         |
|---------------|---------------------------------------------------------------------------------------------------------------------|
| `start`       | Runs the service locally, so you can call your API endpoints on http://localhost.                                   |
| `ngrok`       | Runs the ngrok service locally, so you can use the https endpoint in Alexa skill:  https://XXXXX.ngrok.io.          |
| `build`       | Clean the build and start a new process to build again the files          |
| `clean`       | Clean the build         |
| `deploy`       | Build the project and then deploy to aws lambda         |
| `sync:model`       | Sync the model from Alexa Skill Console with local model from models folder         |


# How to convert audio files

Amazon requests the sounds in a [special format](https://developer.amazon.com/docs/custom-skills/speech-synthesis-markup-language-ssml-reference.html#audio) to be played on its devices. You can find a tool [here](https://www.jovo.tech/audio-converter) which helps you to convert your files.


## Resources

1. https://medium.com/@cnadeau_/allow-alexa-to-run-your-locally-hosted-skill-1786e3ca7a1b
2. https://github.com/balassy/aws-lambda-typescript
3. https://ask-sdk-for-nodejs.readthedocs.io/en/latest/Developing-Your-First-Skill.html
4. https://ngrok.com/
5. https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs
6. https://developer.amazon.com/docs/smapi/ask-cli-command-reference.html
7. https://developer.amazon.com/docs/smapi/quick-start-alexa-skills-kit-command-line-interface.html
