clean:
	rm -rf app resources

build: clean
	hugo --minify

build-preview: clean
	hugo \
	--baseURL $(DEPLOY_PRIME_URL) \
	--buildDrafts \
	--buildFuture \
	--minify
