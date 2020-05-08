San Jose State University
Enterprise Software - CMPE172 - Spring 2020
Members: Matthew Seah, Sean Chan, Brandon Neep 
This project allows submitted images from a containerized backend Java application that are stored on AWS S3, with data stored in AWS RDS, to be displayed based on tag information in the frontend web-based application

Sample Screenshots here:

Pre-Req:
Java
Docker
Public images found on AWS S3

To run locally:
Java.application.properties must be set to local database
S3 image addresses to be replaced with local image addresses

UML Diagram

![UML Diagram](https://github.com/brandonneep/image_tags/blob/master/images/umldiagram.PNG)

UI

![UML Diagram](https://github.com/brandonneep/image_tags/blob/master/images/uidiagram.PNG)

Database Queries

![UML Diagram](https://github.com/brandonneep/image_tags/blob/master/images/rdsschema.PNG)
![UML Diagram](https://github.com/brandonneep/image_tags/blob/master/images/APIQuery.png)

Mid tier APIs

![UML Diagram](https://github.com/brandonneep/image_tags/blob/master/images/APIDiagram.png)

UI data transport

![UML Diagram](https://github.com/brandonneep/image_tags/blob/master/images/UI-APIConnection.png)
