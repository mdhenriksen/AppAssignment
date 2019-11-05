FROM ubuntu
RUN apt-get update
RUN apt-get -y install sudo
RUN apt-get upgrade -y
RUN apt-get install software-properties-common -y
RUN add-apt-repository ppa:deadsnakes/ppa -y
RUN apt-get update
RUN apt-get install python3.6 -y
RUN apt-get install curl -y
RUN curl -sL https://deb.nodesource.com/setup_13.x | sudo -E bash -
RUN apt-get install nodejs -y
RUN apt install git -y
RUN git clone https://github.com/mdhenriksen/AppAssignment.git
WORKDIR /AppAssignment/Frontend/
RUN npm install
CMD npm start

