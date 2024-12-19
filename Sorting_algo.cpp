#include <bits/stdc++.h>
using namespace std;

int bubble(int arr[],int n){
  
  for(int i=0; i<n-1; i++){
    bool flag=true;
    for(int j=0; j<n-i-1; j++){
      
      if(arr[j]>arr[j+1]){
        
        flag=false;
        swap(arr[j],arr[j+1]);
      }
    }
    if(flag) break;
  }
  
  return n;
}

void selection(int arr[],int n){
  
  for(int i=0; i<n-1; i++){
    int minIdx=i;
    for(int j=i+1; j<n; j++){
      if(arr[j]<arr[minIdx]){
        minIdx=j;
      }
    }
    swap(arr[i],arr[minIdx]);
  }
}


void insertion(int arr[],int n){
  
  for(int i=1; i<n; i++){
    int curr=arr[i];
    int prev=i-1;
    
    while(prev>=0 && arr[prev]>curr){
      arr[prev+1]=arr[prev];
      prev--;
    }
    arr[prev+1]=curr;
  }
  
}


void print(int arr[],int n){
  for(int i=0; i<n; i++) cout<<arr[i]<<" ";
}

int main() 
{
  int n=5;
  int arr[n]={4,1,5,2,3};
    // bubble(arr,n);
    // selection(arr,n);
    insertion(arr,n);
    print(arr,n);
    
    return 0;
}