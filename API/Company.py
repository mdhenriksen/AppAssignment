class Company:
    def __init__(self, id, name, address, city, country, mail, phone):
        self.id = id
        self.name = name
        self.address = address
        self.city = city
        self.country = country
        self.mail = mail
        self.phone = phone
    
    def __str__(self):
        return str(self.id + " " + self.name + " " + self.address 
        + " " + self.city + " " + self.country + " " + self.mail + " " + self.phone)