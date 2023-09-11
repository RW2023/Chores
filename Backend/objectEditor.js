db.parents.insertMany([
    {
        "firstName": "Ryan",
        "lastName": "Wilson",
        "email": "ryan@email.com",
        "phoneNumber": "123-456-7890",
        "passwordHash": "hashed_password_here",
        "roles": ["Admin"],
        "notificationPreferences": {
            "email": true,
            "sms": true 
        },
        "themePreferences": "dark",
        "lastLogin": ISODate("2023-09-10T10:00:00Z"),
        "activityHistory": [],
        "childIds": [],
        "spouseId": null,
        "assignedChores": [],
        "completedChores": [],
        "profilePicture": "url_here",
        "accountStatus": "Active"
    },
    {
        "firstName": "Veronique",
        "lastName": "Dasse",
        "email": "veronique@email.com",
        "phoneNumber": "098-765-4321",
        "passwordHash": "another_hashed_password",
        "roles": ["User"],
        "notificationPreferences": {
            "email": true,
            "sms": true
        },
        "themePreferences": "light",
        "lastLogin": ISODate("2023-09-10T10:00:00Z"),
        "activityHistory": [],
        "childIds": [],
        "spouseId": null,
        "assignedChores": [],
        "completedChores": [],
        "profilePicture": "another_url",
        "accountStatus": "Active"
    }
])
