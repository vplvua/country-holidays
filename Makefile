clean:
	@echo "Cleaning up..."
	rm -rf dist
	ng cache clean

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

run: 
	@echo "Running..."
	npm run start