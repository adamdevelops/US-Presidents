import csv

# CSV Reader


def get_pres():

     with open('PresidentsList.csv', newline='') as csvfile:
         reader = csv.DictReader(csvfile)
         for row in reader:
             print(row['President'])


#get_pres()



# datafile = open('PresidentsList.csv', 'r')
# myreader = csv.DictReader(datafile)
# for row in myreader:
#    print(row['President'])
