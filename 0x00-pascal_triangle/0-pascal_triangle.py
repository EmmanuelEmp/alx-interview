
def pascal_triangle(n):
    """
    Creates a list of lists of integers representing Pascal's triangle of n.
    Returns an empty list if n <= 0.
    """
    if n <= 0:
        return []

    triangle = []
    for i in range(n):
        row = [1]  # First element of each row is always 1
        if triangle:  # If triangle is not empty
            prev_row = triangle[-1]  # Get the previous row
            for j in range(len(prev_row) - 1):  # Iterate through previous row
                row.append(prev_row[j] + prev_row[j + 1])  # Compute current element
            row.append(1)  # Last element of each row is always 1
        triangle.append(row)

    return triangle
