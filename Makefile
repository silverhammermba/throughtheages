DEST=/srv/http/TtA/
SRC=index.html

default: $(addprefix $(DEST), $(SRC))

$(DEST)%: %
	sudo install --mode=644 --owner=http --group=http $< $@
