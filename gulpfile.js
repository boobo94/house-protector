"use strict";

const gulp = require("gulp");
const path = require("path");
const child_process = require("child_process");
const del = require("del");

const IN_DIR = "lambda/custom/";
const OUT_DIR = "dist/custom/";

gulp.task("tsc", function (done) {
  const tscPath = path.normalize("./node_modules/.bin/tsc");
  const command = `${tscPath} -p tsconfig.json`;

  child_process.execSync(command, {
    stdio: "inherit"
  });
  done();
});

// gulp.task("test", gulp_base.test);

gulp.task("json", function () {
  return gulp.src(IN_DIR + '/**/package.json').pipe(gulp.dest(OUT_DIR));
});

gulp.task("models", function (done) {
  const fs = require("fs");

  /**
   * Reads the model for the given locale and returns the parsed JSON.
   *
   * @param {string} locale
   */
  function readModel(locale) {
    const model = fs.readFileSync(`${__dirname}/models/${locale}.json`, "utf-8");
    return JSON.parse(model);
  }

  /**
   * Writes the given model to the file.
   *
   * @param {object} model
   * @param {string} locale
   */
  function writeModel(model, locale) {
    const json = JSON.stringify(model, null, 2);
    fs.writeFileSync(`${__dirname}/models/${locale}.json`, json);
  }

  const Locales = {
    enUS: "en-US",
    enCA: "en-CA",
    enIN: "en-IN",
    enAU: "en-AU",
    enGB: "en-GB",
  };

  const Environments = {
    Dev: "dev",
    Prod: "prod",
  };

  const invocations = {
    [Environments.Dev]: {
      [Locales.enUS]: "house protector",
      [Locales.enCA]: "house protector",
      [Locales.enIN]: "house protector",
      [Locales.enAU]: "house protector",
      [Locales.enGB]: "house protector",
    },
    [Environments.Prod]: {
      [Locales.enUS]: "house protector",
      [Locales.enCA]: "house protector",
      [Locales.enIN]: "house protector",
      [Locales.enAU]: "house protector",
      [Locales.enGB]: "house protector",
    },
  };

  // make sure we have the environment set
  if (!process.env.ENV) {
    throw new Error("ENV environment variable not set");
  }

  // get the current environment
  const env = process.env.ENV;

  // make sure the env is valid
  if (env !== Environments.Local
    && env !== Environments.Dev
    && env !== Environments.Prod) {
    throw new Error("Invalid ENV environment variable: " + env);
  }

  // read the models
  const enUSModel = readModel(Locales.enUS);
  const enCAModel = readModel(Locales.enCA);
  const enINModel = readModel(Locales.enIN);
  const enAUModel = readModel(Locales.enAU);
  const enGBModel = readModel(Locales.enGB);

  // set the invocation names
  enUSModel.interactionModel.languageModel.invocationName = invocations[env][Locales.enUS];
  enCAModel.interactionModel.languageModel.invocationName = invocations[env][Locales.enCA];
  enINModel.interactionModel.languageModel.invocationName = invocations[env][Locales.enIN];
  enAUModel.interactionModel.languageModel.invocationName = invocations[env][Locales.enAU];
  enGBModel.interactionModel.languageModel.invocationName = invocations[env][Locales.enGB];

  // write the model to the file
  writeModel(enUSModel, Locales.enUS);
  writeModel(enCAModel, Locales.enCA);
  writeModel(enINModel, Locales.enIN);
  writeModel(enAUModel, Locales.enAU);
  writeModel(enGBModel, Locales.enGB);

  done();
});

gulp.task("clean", () => {
  return del([".coverage", "dist"]);
});

gulp.task("default", gulp.series("clean", gulp.parallel("tsc", "json")));
gulp.task("release", gulp.series("default"));
