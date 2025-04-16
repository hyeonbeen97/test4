FROM node:20
WORKDIR /app
COPY . .
# 가지고 있는 모든 데이터를 app으로 전부 옮겨? 앞에 니꺼 뒤에 내꺼
RUN npm install

ENV PORT=8080
EXPOSE 8080

CMD [ "node", "server" ]
