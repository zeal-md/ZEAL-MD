FROM quay.io/sampandey001/secktor
RUN git clone https://github.com/zeal-md/ZEAL-MD /root/zeal-md
WORKDIR /root/zeal-md/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
