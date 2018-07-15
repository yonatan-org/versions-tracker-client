from node:8.1.2

RUN mkdir -p /home/app/code

WORKDIR /home/app/code

COPY . /home/app/code

RUN npm install && \
    npm install -g serve@6.5.3 && \
    npm run build

CMD npm run start:prod