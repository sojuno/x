#include <iostream>
#include <algorithm>
using namespace std;

int n;

int main()
{
    cin >> n;
    int *a = new int[n];
    int *dp = new int[n + 1];   
    dp[0] = 0;

    for (int i = 0; i < n; i++)
    {
        cin >> a[i];
    }

    for (int i = 1; i <= n; i++)
    {
        int max_val = 0;
        for (int j = 0; j < i; j++)
        {
            max_val = max(max_val, a[j] + dp[i - j - 1]);
        }
        dp[i] = max_val;
    }

    cout << dp[n];
    return 0;
}
