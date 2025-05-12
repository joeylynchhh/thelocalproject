'use client';

import React from 'react';

type FilterSectionProps = {
  title: string;
  options: string[];
  subOptions?: Record<string, string[]>;
};

const FilterSection = ({ title, options, subOptions }: FilterSectionProps) => {
  return (
    <div className="filter-section">
      <h4>{title}</h4>
      <ul>
        {options.map((option) => (
          <li key={`${title}-${option}`}>
            <label>
              <input type="checkbox" name={title.toLowerCase()} value={option} />
              {option}
            </label>
            {subOptions?.[option] && (
              <ul className="sub-filter">
                {subOptions[option].map((subOption) => (
                  <li key={`${option}-${subOption}`}>
                    <label>
                      <input type="checkbox" name={`${option.toLowerCase()}-sub`} value={subOption} />
                      {subOption}
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <style jsx>{`
        .filter-section {
          margin-bottom: 2rem;
        }
        
        .filter-section h4 {
          font-size: 1rem;
          font-weight: 500;
          margin-bottom: 1rem;
        }
        
        .filter-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .filter-section li {
          margin-bottom: 0.5rem;
        }
        
        .sub-filter {
          margin-left: 1.5rem;
          margin-top: 0.5rem;
        }
      `}</style>
    </div>
  );
};

const ArticleFilters = () => {
  // Article types for filtering
  const articleTypes = [
    "All Articles",
    "Architecture and Interior Design",
    "Product Design",
    "News and Events",
    "Project Galleries",
    "Print Publication Articles"
  ];

  // Topics for filtering
  const topics = [
    "Residential Design",
    "Furniture Designs",
    "Product and Material Design",
    "Profile Features",
    "Garden and Landscape Design",
    "Commercial Design",
    "Hospitality Design",
    "Art & Sculpture"
  ];

  // Locations for filtering
  const locations = [
    "Australia",
    "New Zealand",
    "North America"
  ];

  // Sub-options for locations
  const locationSubOptions = {
    "Australia": [
      "Victoria",
      "New South Wales",
      "Queensland",
      "Tasmania",
      "Western Australia",
      "South Australia"
    ],
    "New Zealand": [
      "North Island",
      "South Island"
    ]
  };

  // Issues for print publications
  const printPublicationSubOptions = {
    "Print Publication Articles": [
      "Issue No. 1",
      "Issue No. 2",
      "Issue No. 3",
      "Issue No. 4",
      "Issue No. 5",
      "Issue No. 6",
      "Issue No. 7",
      "Issue No. 8",
      "Issue No. 9",
      "Issue No. 10",
      "Issue No. 11"
    ]
  };

  return (
    <div className="filters-sidebar">
      <FilterSection 
        title="Article Type" 
        options={articleTypes} 
        subOptions={printPublicationSubOptions} 
      />
      <FilterSection 
        title="Topic" 
        options={topics} 
      />
      <FilterSection 
        title="Location" 
        options={locations} 
        subOptions={locationSubOptions} 
      />

      <style jsx>{`
        .filters-sidebar {
          margin-top: 3rem;
          border-top: 1px solid #eaeaea;
          padding-top: 2rem;
        }
      `}</style>
    </div>
  );
};

export default ArticleFilters; 