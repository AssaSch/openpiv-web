FROM ubuntu:16.04 

#RUN apt-get update && \
#apt-get install -y python python-dev python-pip
RUN apt-get update
#RUN apt-get install python3.6
RUN apt-get install -y software-properties-common
RUN add-apt-repository ppa:jonathonf/python-3.6
RUN apt-get update
RUN apt-get install -y cython python-numpy python-scipy
#RUN pip install --upgrade pip
#RUN pip3 install --trusted-host pypi.python.org --trusted-host pypi.org --trusted-host files.pythonhosted.org numpy==1.14.3
RUN apt-get install -y  python3.6
RUN apt-get -y install python3-pip
RUN pip3 install numpy
RUN pip3 install openpiv
RUN pip3 install flask
RUN pip3 install flask_restful
#RUN git clone https://github.com/OpenPIV/openpiv-python.git

#RUN cd openpiv-python && python setup.py install

COPY . /app

WORKDIR /app

CMD ["python3", "src/server.py"]
