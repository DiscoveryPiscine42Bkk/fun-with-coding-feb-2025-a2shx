if [ $# -eq 0 ]; then
    echo "no arguments"
else
    count=0
    for arg in "$@"; do
        echo "$arg"
        ((count++))
        if [ $count -eq 3 ]; then
            break
        fi
    done
fi
