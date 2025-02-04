if [ $# -eq 0 ]; then
    echo "no arguments supplied"
    exit 1
fi

# Loop through all arguments
for folder in "$@"; do
    mkdir -p "ex$folder"
done
