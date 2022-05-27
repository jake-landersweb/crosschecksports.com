FROM node:14

RUN mkdir /crosscheck

WORKDIR /crosscheck

COPY ./package.json /crosscheck

RUN npm install

COPY . /crosscheck

RUN npm run build

CMD ["npm", "start"]