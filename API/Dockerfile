FROM ubuntu
RUN apt-get update
RUN apt-get -y install sudo
RUN apt-get upgrade -y
RUN apt-get install software-properties-common -y
RUN add-apt-repository ppa:deadsnakes/ppa -y
RUN apt-get update
RUN apt-get install python3.6 -y
RUN apt-get install curl -y
RUN apt install git -y
RUN git clone https://github.com/mdhenriksen/AppAssignment.git
WORKDIR /AppAssignment/API/
RUN apt-get install python3-pip -y
RUN pip3 install -U Flask
RUN apt-get install libpq-dev -y
RUN apt-get install python-psycopg2 -y
RUN pip3 install psycopg2
RUN pip3 install sqlalchemy
RUN pip3 install -U flask-cors
CMD python3 CompanyController.py

