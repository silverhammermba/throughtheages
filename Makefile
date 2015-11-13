DEST=/srv/http/TtA/
SRC=index.html style.css script.js

default: $(addprefix $(DEST), $(SRC))

$(DEST)%: %
	sudo install --mode=644 --owner=http --group=http $< $@
