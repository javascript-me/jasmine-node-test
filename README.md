# jasmine-node-test

npm install -g jasmine-node

npm install mockery

jasmine-node spec/math-callback-spec.js
jasmine-node spec/math-from-file-spec.js
jasmine-node spec/math-from-file-with-mock-fs-spec.js
jasmine-node spec/math-spec.js

### Generate reports in folder ./reports

jasmine-node --junitreport spec/*.js
