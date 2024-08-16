clean:
	@echo "Cleaning up..."
	rm -rf dist

ft:
	@echo "Formatting code..."
	npm run format

lint:
	@echo "Linting code..."
	npm run lint

test:
	@echo "Running tests..."
	npm run test

build: ft lint
	@echo "Building..."
	npm run build