# # # # #
# \ | / #
# # - # #
# / | \ #
# # # # #
with open('html_bruto.txt', 'r') as r:
	txt = r.read()

links = []

buffer = ''

# iterate along the file
for i in range(0, len(txt)):
	# check if the word "src" about to begin
	if txt[i] == 's' and txt[i + 1] == 'r' and txt[i + 2] == 'c':
		# counter of quotes \"
		count = 0
		# wait about the two quotes
		while count != 2:
			# fill the buffer string with >> src="string-link-here" <<
			buffer += txt[i]
			# check if found some quote
			if txt[i] == '\"':
				count += 1
			i += 1

		# add a \n on buffer-string
		buffer += '\n'

		# push buffer string link on list
		links.append(buffer)

		# set buffer string to initial state
		buffer = ''

# open file, save the current link
with open('resolve.txt', 'w') as x:
	for link in links:
		x.write(link)