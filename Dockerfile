from node:8.1.2

RUN mkdir -p /home/app/code/

WORKDIR /home/app/code/

RUN npm install

CMD ["npm", "start"]