var faker = require('faker')

function generateBooks(){
	var books = [];

	for (var id = 1; id < 51; id++){
		var bookName = faker.name.title()
		var authorName = faker.name.title()
		var publishDate = faker.date.past()

		books.push({
			"id": id,
			"book_name": bookName,
			"author": authorName,
			"published": publishDate
		})
	}

	return { 'books': books }
}

module.exports = generateBooks