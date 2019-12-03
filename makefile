all: uchart.min.js

uchart.min.js: uchart.js
	curl -X POST -s --data-urlencode 'input@uchart.js' https://javascript-minifier.com/raw > $@
	wc -c uchart.min.js

clean:
	rm -f *.min.js