#include <iostream>
using namespace std;
int n;

int main()
{
    cin >> n;
    int *a = new int[n];
    
    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
    }
    int max_score = a[0];
    int min_score = a[0];

    for (int j = 1; j < n; j++)
    {
        if (a[j] > max_score)
        {
            max_score = a[j];
        }
        if (a[j] <= min_score)
        {
            min_score = a[j];
        }
    }

    cout << min_score << " " << max_score;
    return 0;
}
