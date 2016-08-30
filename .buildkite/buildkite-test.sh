# .buildkite/buildkite-test.sh

set -e
n lts
npm i -g npm@2
npm rebuild
npm install

n 0.10.33 && npm i -g npm@2 && npm rebuild && npm t && \
n 4.4.4 && npm i -g npm@2 && npm rebuild && npm t && \
n 6.0.0 && npm i -g npm@2 && npm rebuild && npm t