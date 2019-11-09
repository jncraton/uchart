all: uchart.min.js

uchart.min.js:
	curl -X POST -s --data-urlencode 'input@uchart.js' https://javascript-minifier.com/raw > $@

clean:
	rm -f *.min.js